'use client';

import { type ChangeEvent, useState } from 'react';

// sheets 가 잘못되었을시 -> beams, frame 망가짐
// bolts가 잘못되었을시 -> frame 망가짐
// beams가 잘못되었을시 -> frame 망가짐
// frame 잘못되었을시 -> frame 망가짐

type FactoryType = {
  sheets: boolean;
  beams: boolean;
  frame: boolean;
  bolts: boolean;
};

type NewStateType = { target: keyof FactoryType; value: boolean };

const factoryDepencyMap = {
  sheets: ['beams', 'frame'],
  beams: ['frame'],
  bolts: ['frame'],
  frame: [],
} as const;

const computeDependency = (newState: NewStateType, factory: FactoryType): FactoryType => {
  if (newState.target === 'sheets') {
    if (newState.value) {
      return {
        sheets: newState.value,
        beams: newState.value,
        bolts: factory.bolts,
        frame: factory.bolts,
      };
    }
    if (!newState.value) {
      return {
        sheets: newState.value,
        beams: false,
        frame: false,
        bolts: factory.bolts,
      };
    }
  }

  if (newState.target === 'beams') {
    if (newState.value) {
      return {
        sheets: factory.sheets,
        beams: newState.value,
        frame: factory.sheets && factory.bolts,
        bolts: factory.bolts,
      };
    }
    if (!newState.value) {
      return {
        sheets: factory.sheets,
        beams: newState.value,
        frame: false,
        bolts: factory.bolts,
      };
    }
  }

  if (newState.target === 'bolts') {
    if (newState.value) {
      return {
        sheets: factory.sheets,
        beams: factory.beams,
        bolts: newState.value,
        frame: factory.sheets && factory.bolts,
      };
    }
    if (!newState.value) {
      return {
        sheets: factory.sheets,
        beams: factory.beams,
        bolts: newState.value,
        frame: false,
      };
    }
  }
  if (newState.target === 'frame') {
    return { ...factory, frame: newState.value };
  }
  throw new Error('execption');
};

export default function Home() {
  const [factory, setFactory] = useState<FactoryType>({ beams: false, bolts: false, frame: false, sheets: false });
  const handleCheckboxClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'sheets-status') {
      setFactory(prev => computeDependency({ target: 'sheets', value: event.target.checked }, prev));
    }
    if (event.target.id === 'beam-status') {
      setFactory(prev => computeDependency({ target: 'beams', value: event.target.checked }, prev));
    }
    if (event.target.id === 'bolts-status') {
      setFactory(prev => computeDependency({ target: 'bolts', value: event.target.checked }, prev));
    }
    if (event.target.id === 'frames-status') {
      setFactory(prev => computeDependency({ target: 'frame', value: event.target.checked }, prev));
    }
  };
  return (
    <div>
      <h3>control panel</h3>
      <div className="">
        <input type="checkbox" id="sheets-status" />
        <span id="sheets-station" style={{ backgroundColor: 'red' }}>
          SHEET
        </span>
      </div>

      <div className="">
        <input type="checkbox" id="beam-status" />
        <span id="beams-station" style={{ backgroundColor: 'red' }}>
          BEAMS
        </span>
      </div>
      <div className="">
        <input type="checkbox" id="bolts-status" />
        <span id="bolts-station" style={{ backgroundColor: 'red' }}>
          BOLTS
        </span>
      </div>
      <div className="">
        <input type="checkbox" id="frames-status" />
        <span id="frames-station" style={{ backgroundColor: 'red' }}>
          BOLTS
        </span>
      </div>
    </div>
  );
}
