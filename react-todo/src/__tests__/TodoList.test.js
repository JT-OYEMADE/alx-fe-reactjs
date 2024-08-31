// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(3);
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a new todo/i);
  const addButton = screen.getByText(/add todo/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(4);
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todoText = screen.getByText('Learn React');

  fireEvent.click(todoText);
  expect(todoText).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todoText);
  expect(todoText).not.toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText(/delete/i)[0];

  fireEvent.click(deleteButton);

  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(2);
});
