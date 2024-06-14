import { atom, useAtom } from 'jotai';

type TodoItemType = {
  key: string;
  isDone: boolean;
  title: string;
  containsSubjectList: string[];
};

type CheckStatus = 'all' | 'done' | 'not-done';

type TodoSubject = {
  key: string;
  todoItemList: TodoItemType[];
  checkStatus: CheckStatus;
};

type TodoSubjectList = {
  todoSubjectList: TodoSubject[];
  checkStatus: CheckStatus;
};

const createTodoSubject = (): TodoSubject => {
  return {
    todoItemList: [],
    checkStatus: 'all',
  };
};

const createTodoItem = (todoSubject: TodoSubject) => {
  return {};
};

const directionTodo = (key: string, subjectList: TodoSubjectList['todoSubjectList']) => {
  subjectList.findIndex(item => item.todoItemList.findIndex(todoItem => todoItem.key === key));
};

type TodoItemStatus = 'last' | 'middle' | 'first';

type TodoItemProps = {
  todoItem: TodoItemType;
  status: TodoItemStatus;
  onUpClick?: () => void;
  onRemoveClick?: () => void;
};

const TodoItem = (props: TodoItemProps) => {
  const { todoItem } = props;
  const { key, isDone, title } = todoItem;

  return <div className=""></div>;
};

type TodoContainerProps = {
  checkStatus: CheckStatus;
};

const useCheckStatus = () => {
  const handleAllCheckStatus = (status: CheckStatus) => {
    //대장 상태를 바꾸면서
    // 하위 스테이터스 상태도 함께 바꾸도록
  };

  return {
    handleAllCheckStatus,
  };
};

const checkStatusAtom = atom<CheckStatus>('all');
const TodoContainer = (props: TodoContainerProps) => {
  return (
    <div className="">
      {([] as TodoItemType[]).map((todoItem, index) => {
        return <TodoItem key={todoItem.key} todoItem={todoItem} onUpClick={() => {}} onRemoveClick={() => {}} />;
      })}
    </div>
  );
};

// container -> contaienrList.map(({checkStatus}) => )
//checkstatus ->
//

//
