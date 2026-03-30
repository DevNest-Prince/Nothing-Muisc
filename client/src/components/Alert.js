import { cn } from '@/utils/helpers';

export default function Alert({ type = 'info', title, children, className }) {
  const typeStyles = {
    info: 'bg-blue-100 border-blue-300 text-blue-800',
    success: 'bg-green-100 border-green-300 text-green-800',
    warning: 'bg-yellow-100 border-yellow-300 text-yellow-800',
    error: 'bg-red-100 border-red-300 text-red-800',
  };

  const icons = {
    info: '',
    success: '',
    warning: '',
    error: '',
  };

  return (
    <div className={cn('border rounded-lg p-4', typeStyles[type], className)}>
      <div className="flex gap-3">
        <span className="text-xl">{icons[type]}</span>
        <div>
          {title && <h4 className="font-bold mb-1">{title}</h4>}
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}
