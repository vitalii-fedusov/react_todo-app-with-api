import React, { useMemo, useState } from 'react';
import { Todo } from './types/Todo';

interface ITodosContext {
  todos: Todo[],
  setTodos: (newTodos: Todo[]) => void,
  errorMessage: string,
  setErrorMessage: (newMessage: string) => void,
  newTitle: string,
  setNewTitle: (newTitle: string) => void,
  selectedId: number[] | null,
  setSelectedId: (arrOfIds: number[] | null) => void,
  isEditing: boolean,
  setIsEditing: (status: boolean) => void,
  updatedTitle: string,
  setUpdatedTitle: (newTitle: string) => void,
  isLoading: boolean,
  setIsLoading: (status: boolean) => void,
  USER_ID: number,
  setUserId: (id: number) => void,
}

export const TodosContext = React.createContext<ITodosContext>({
  todos: [],
  setTodos: () => {},
  errorMessage: '',
  setErrorMessage: () => {},
  newTitle: '',
  setNewTitle: () => {},
  selectedId: null,
  setSelectedId: () => {},
  isEditing: false,
  setIsEditing: () => {},
  updatedTitle: '',
  setUpdatedTitle: () => {},
  isLoading: false,
  setIsLoading: () => {},
  USER_ID: 0,
  setUserId: () => {},
});

export const useTodos = (): ITodosContext => React.useContext(TodosContext);

type Props = {
  children: React.ReactNode;
};

export const TodosProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [selectedId, setSelectedId] = useState<number[] | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [USER_ID, setUserId] = useState(0);

  const value = useMemo(() => ({
    todos,
    setTodos,
    errorMessage,
    setErrorMessage,
    newTitle,
    setNewTitle,
    selectedId,
    setSelectedId,
    isEditing,
    setIsEditing,
    updatedTitle,
    setUpdatedTitle,
    isLoading,
    setIsLoading,
    USER_ID,
    setUserId,
  }), [
    todos,
    errorMessage,
    newTitle,
    selectedId,
    isEditing,
    updatedTitle,
    isLoading,
    USER_ID,
  ]);

  return (
    <TodosContext.Provider value={value}>
      {children}
    </TodosContext.Provider>
  );
};