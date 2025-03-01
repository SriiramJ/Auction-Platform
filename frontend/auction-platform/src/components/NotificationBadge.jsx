const NotificationBadge = ({ count }) => (
  <div className="relative">
    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {count}
    </span>
  </div>
);

export default NotificationBadge;
