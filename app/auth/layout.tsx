const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500 via-fuchsia-500 to-pink-500">
      {children}
    </div>
  );
};

export default AuthLayout;
