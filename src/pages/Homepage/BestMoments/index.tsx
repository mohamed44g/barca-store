/* eslint-disable react-refresh/only-export-components */
import Title from "../../../componants/Title";
import "./style.scss";
import { lazy } from "react";
const Iframe = lazy(() => import("../../../componants/Iframe/index"));
export default function index() {
  return (
    <div className="BestMoments">
      <Title title="Best Moments" />
      <div className="container">
        <div className="BestMoments-cards d-flex justify-content-center flex-wrap gap-5">
          <Iframe src="https://app.videas.fr/embed/media/d48f03aa-a896-4cee-9078-702ac250fb06/" />
          <Iframe src="https://app.videas.fr/embed/media/b2ef43f9-c913-4573-b050-b891cd85bbee/" />
          <Iframe src="https://app.videas.fr/embed/media/e91f89cc-0a94-4fc3-bfcf-ba38eddc8158/" />
          <Iframe src="https://app.videas.fr/embed/media/1976fa08-227b-47f1-b630-ccc1e75777a4/" />
          <Iframe src="https://app.videas.fr/embed/media/b5d33b0d-b82c-4758-af9f-ce568e363050/" />
          <Iframe src="https://app.videas.fr/embed/media/38f9e509-29ea-45fe-8933-c6fc17015df0/" />
        </div>
      </div>
    </div>
  );
}
