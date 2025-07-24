import { IActivMovie } from "../../models/model";
import "./TendingNow.css";
import { fetchMovie, putfetchMovie } from "../../Store/Action/HomeAction";
export const TendingNow = ({
  tendingNow,
  setActivId,
  activeId,
}: {
  tendingNow: IActivMovie[];
  setActivId: (e: string) => void;
  activeId: any;
}) => {
  async function activeMovie(movieItem: IActivMovie) {
    sessionStorage.setItem("movieID", JSON.stringify(movieItem.id));
    setActivId(movieItem.id);
  }

  return (
    <div className="TendingNow_box">
      <p className="box">Trending Now</p>
    <div className="TendingNow">
      {activeId &&
        tendingNow[activeId - 1]?.id === activeId &&
        activeId !== "1" && (
          <div>
            <img
              src={`/images/${tendingNow[activeId - 1]?.CoverImage}`}
              alt=""
            />
          </div>
        )}
      {tendingNow?.map((el: IActivMovie,index:number) => (
        <div key={index} onClick={() => activeMovie(el)}>
          <img src={`/images/${el?.CoverImage}`} alt="" />
        </div>
      ))}
    </div>
    </div>
  );
};
