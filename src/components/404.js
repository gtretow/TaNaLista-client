import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <Link to="/">
        <h1 className="text-center">Volte agora para a pagina principal!</h1>
      </Link>
      <div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
        <img
          src="https://www.boostability.com/wp-content/uploads/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg"
          alt="page not found illustration"
        />
      </div>
    </div>
  );
}

export default NoMatch;
