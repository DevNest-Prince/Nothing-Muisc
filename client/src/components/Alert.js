import { cn } from '@/utils/helpers';

export default function Alert({ type = 'info', title, children, className }) {
  const typeStyles = {
    info: 'bg-blue-900/30 border-blue-700/50 text-blue-100',
    success: 'bg-green-900/30 border-green-700/50 text-green-100',
    warning: 'bg-amber-900/30 border-amber-700/50 text-amber-100',
    error: 'bg-red-900/30 border-red-700/50 text-red-100',
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
