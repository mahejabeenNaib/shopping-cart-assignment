import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navigator from "../../Navigator";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="mb-5">
        <Navigator />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
