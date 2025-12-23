export type User = {
  email: string;
  credits: number;
};

export const getUser = (): User | null => {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem("razemind_user");
  return data ? JSON.parse(data) : null;
};

export const saveUser = (user: User) => {
  localStorage.setItem("razemind_user", JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem("razemind_user");
};
export const updateCredits = (credits: number) => {
  const user = getUser();
  if (!user) return;
  user.credits = credits;
  saveUser(user);
};