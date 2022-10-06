interface ChildrenProps {
  children?: React.ReactNode;
}

export interface User {
  username: string;
  fullName: string;
  phone: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface MessValidatorRegis {
  email: string;
  fullName: string;
  userName: string;
  phone: string;
  password: string;
  password2: string;
}

export interface InterfaceErrorLogin {
  auth: {
    login: {
      error: string;
    };
  };
}
