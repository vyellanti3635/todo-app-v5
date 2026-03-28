export type TodoItem = {
  id: number;
  text: string;
  note: string;
  done: boolean;
};

export type TodoLists = {
  TodoList1: TodoItem[];
  TodoList2: TodoItem[];
  TodoList3: TodoItem[];
  TodoList4: TodoItem[];
  TodoList5: TodoItem[];
  TodoList6: TodoItem[];
  TodoList7: TodoItem[];
};

export type TodoListKey = keyof TodoLists;

export const TodoData: TodoLists = {
  TodoList1: [
    {
      id: 1,
      text: "Eat Breakfast",
      note: "Make Eggs and Pancakes",
      done: false,
    },
    { id: 2, text: "Walk Dog", note: "Bring doggie bag", done: false },
    {
      id: 3,
      text: "Take Shower",
      note: "Shower no later than 10am",
      done: false,
    },
  ],
  TodoList2: [
    { id: 1, text: "Get Lunch", note: "Lunch at Sandbox", done: false },
    {
      id: 2,
      text: "Run a Mile",
      note: "Stop by mom at end of run",
      done: false,
    },
    {
      id: 3,
      text: "Take Bath",
      note: "Prep half hour before bath",
      done: false,
    },
  ],
  TodoList3: [
    {
      id: 1,
      text: "Study React",
      note: "Practice components",
      done: false,
    },
    { id: 2, text: "Go to Gym", note: "Leg day", done: false },
    {
      id: 3,
      text: "Finish Homework",
      note: "Submit before midnight",
      done: false,
    },
  ],
  TodoList4: [
    {
      id: 1,
      text: "Work on Project",
      note: "Complete module 3",
      done: false,
    },
    { id: 2, text: "Attend Meeting", note: "Zoom at 2pm", done: false },
    { id: 3, text: "Read Book", note: "Read 20 pages", done: false },
  ],
  TodoList5: [
    {
      id: 1,
      text: "Submit Assignment",
      note: "Upload to portal",
      done: false,
    },
    {
      id: 2,
      text: "Team Sync",
      note: "Discuss project progress",
      done: false,
    },
    { id: 3, text: "Watch Movie", note: "Relax evening", done: false },
  ],
  TodoList6: [
    { id: 1, text: "Play Badminton", note: "Game at park", done: false },
    { id: 2, text: "Clean Room", note: "Organize desk", done: false },
    { id: 3, text: "Relax", note: "Listen to music", done: false },
  ],
  TodoList7: [
    { id: 1, text: "Meal Prep", note: "Cook for week", done: false },
    { id: 2, text: "Plan Next Week", note: "Review schedule", done: false },
    {
      id: 3,
      text: "Call Family",
      note: "Sunday evening call",
      done: false,
    },
  ],
};
