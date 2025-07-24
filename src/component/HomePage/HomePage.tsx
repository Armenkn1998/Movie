import  { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchMovie } from "../../Store/Action/HomeAction";
import "./HomePage.css";
import TendingNow from "../TendingNow";
import {
  activeTendingNow,
  fetchTendingNow,
} from "../../Store/Action/TendingNowAction";
import { IActivMovie } from "../../models/model";
export const HomePage = () => {
  const { Movie } = useAppSelector((state) => state.Movie);
  const { TendingNows } = useAppSelector((state) => state.TendingNows);
  const [activeMovie, setActivMovie] = useState<IActivMovie | any>(Movie);
  const [activeId, setActivId] = useState<string>();
  const [play, setPlay] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let movie: any = sessionStorage.getItem("movieID");
    if (movie) {
      let id = JSON.parse(movie);
      setActivId(id);
    }
    if (activeId) {
      activeTendingNow(activeId, setActivMovie);
    }
  }, []);
  useEffect(() => {
    dispatch(fetchMovie());
    dispatch(fetchTendingNow());
  }, [dispatch]);

  useEffect(() => {
  
    setActivMovie(Movie);
  }, [Movie]);

  useEffect(() => {
    setPlay(false);
    if (activeId) {
      setTimeout(()=>{
        setPlay(true);
      },2000)
      activeTendingNow(activeId, setActivMovie);
    }
  }, [activeId]);

  function playVideo() {
    setPlay(true);
  }
  const formatDuration = (minutes: number): string => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
  
    if (m === 0) return `${h}h`;
    if (h === 0) return `${m}m`; 
    return `${h}h ${m}m`;
  };
  
  
  return (
    <div className="homePage">
      <div className="activMovie">
        <div className="cover">
          {play ? (
            <div className="videoContainer">
             <video src={activeMovie?.VideoUrl} autoPlay muted  crossOrigin="anonymous"/>
            </div>
          ) : (
            <div className="imageContainer">
              <img
                src={`/images/${activeMovie?.CoverImage}`}
                alt={activeMovie?.Title}
              />
            </div>
          )}
        </div>
        <div className="infoMovie">
          <p className="category">{activeMovie?.Category}</p>
          <h1>
            {activeMovie?.Title?.split(" ")[0]}{" "}
            <span className="Irishman">
              {activeMovie?.Title?.split(" ")[1]}
            </span>
          </h1>
          <div className="movie_info">
            <h3>
              {activeMovie?.ReleaseYear}  
            </h3>
            <h3>
                {activeMovie?.MpaRating}  
            </h3>
            <h3>
            {formatDuration(Number(activeMovie?.Duration))}
            </h3>
          </div>
         
          <p>{activeMovie?.Description} </p>
          <div className="btn_box">
            <button
              className="btn-One"
              onClick={() => {
                playVideo();
              }}
            >
              <img src="/images/play-solid.svg" alt="" />
              <p> Play </p>
            </button>
            <button className="btn-Two">More Info</button>
          </div>
        </div>
      </div>

      <TendingNow
        tendingNow={TendingNows}
        setActivId={setActivId}
        activeId={activeId}
      />
    </div>
  );
};
