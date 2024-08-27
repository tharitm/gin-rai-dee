import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StepState {
  currentPage: number; // หน้า (หน้าแรก, หน้าตัวเลือกมื้ออาหาร, หน้าผลลัพธ์)
  currentStep: number; // ขั้นตอนในหน้า (เช่น ขั้นตอนที่ 1, 2, 3)
  setPage: (page: number) => void; // ฟังก์ชันเพื่อเปลี่ยนหน้า
  setStep: (step: number) => void; // ฟังก์ชันเพื่อเปลี่ยนขั้นตอน
  reset: () => void; // ฟังก์ชันเพื่อรีเซ็ตสถานะ
}

const useStepStore = create<StepState>()(
    persist(
        (set) => ({
          currentPage: 1,
          currentStep: 1,
          setPage: (page) => set({ currentPage: page, currentStep: 1 }),
          setStep: (step) => set({ currentStep: step }),
          reset: () => set({ currentPage: 1, currentStep: 1 }),
        }),
        {
          name: 'step-storage', // ชื่อของ storage
        }
      )
)

export { useStepStore };