import React, { useState } from "react";
import Logo from "./components/logo/Logo";
import SearchBar from "./components/search-bar/SearchBar";
import UploadButton from "./components/upload-button/UploadButton";
import LoginButton from "./components/login-button/LoginButton";
import DropdownMenu from "./components/dropdown-menu/DropDownMenu";
import Login from "./sections/login/Login";
import Modal from "./components/modal/Modal";
import SignUp from "./sections/SignUp/SignUp";
import Sidebar from "./sections/sidebar/SideBar";
import Feed from "./sections/feed/Feed";
import PopUp from "./components/popup/PopUp";
import KeyShortCuts from "./sections/popups/KeyShortCuts";
import Downloadables from "./sections/popups/Downloadables";

const Layout: React.FC = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const onLogin = () => {
    setSignUpModal(false);
    setLoginModal(true);
  };
  const onSignUp = () => {
    setLoginModal(false);
    setSignUpModal(true);
  };

  return (
    <div className="flex flex-col bg-cyan-400 h-screen">
      <div className="dark:bg-gray-900 border-b-2 pb-1 dark:border-gray-800 dark:text-white flex flex-row items-center">
        <Logo />
        <SearchBar />
        <div className="flex flex-row gap-2 mr-5">
          <UploadButton />
          <LoginButton onLogin={onLogin} />
          <DropdownMenu />
        </div>
      </div>

      <div className="flex flex-1">
        <aside className="dark:bg-gray-900  border-r-2 border-gray-800 text-white p-4 w-1/6">
          <Sidebar />
        </aside>

        <div className="dark:bg-gray-900 p-4 flex w-full">
          <div className="w-1/3"></div>
          <Feed />
          <div className="w-1/3 flex items-end mb-[150px]">
            <div className="flex flex-col items-end gap-3 ">
              <PopUp>
                <KeyShortCuts />
              </PopUp>
              <PopUp>
                <Downloadables />
              </PopUp>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={loginModal} onClose={() => setLoginModal(false)}>
        <Login onSignUp={onSignUp} />
      </Modal>
      <Modal isOpen={signUpModal} onClose={() => setSignUpModal(false)}>
        <SignUp onLogin={onLogin} />
      </Modal>
    </div>
  );
};

export default Layout;
