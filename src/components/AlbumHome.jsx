import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbum, setPlayer } from "../redux/action";
import { Col, Row } from "react-bootstrap";

const AlbumHome = ({ artistName }) => {
  const album = useSelector((state) => state.album.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbum(artistName));
  }, [artistName]);

  return (
    <Row
      className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
      id={`${artistName}Section`}
    >
      {album.slice(0, 4).map((song) => (
        <Col
          className="text-center"
          key={song.id}
          onClick={() => dispatch(setPlayer(song))}
        >
          <img className="img-fluid" src={song.album.cover_medium} alt="track" />
          <p>
            {song.title_short}
            <br />
            {song.artist.name}
          </p>
        </Col>
      ))}
    </Row>
  );
};

export default AlbumHome;
