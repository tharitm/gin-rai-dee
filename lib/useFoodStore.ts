import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FormattedResponse } from '@/components/Hero';

interface FoodStore {
  items: FormattedResponse[];
  setItems: (newItems: FormattedResponse[]) => void;
}

export const useFoodStore = create<FoodStore>()(
  persist(
    (set) => ({
      items: [],
      setItems: (newItems) => set({ items: newItems }),
    }),
    {
      name: 'food-store',
    }
  )
);
