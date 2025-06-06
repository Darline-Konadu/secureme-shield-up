
import { useToast } from "@/hooks/use-toast";
import { Toast } from "./toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-0 right-0 z-50 space-y-2 p-4">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          title={toast.title}
          description={toast.description}
          variant={toast.variant}
          onClose={dismiss}
        />
      ))}
    </div>
  );
}
