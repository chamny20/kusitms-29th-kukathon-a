import toast from 'react-hot-toast';

export type ToastProps = {
  text: string;
  icon: string;
};

export const notify = ({ text, icon }: ToastProps) => {
  toast.success(text, { duration: 800, icon: icon });
};
