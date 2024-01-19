import { Col, Container, Row } from "react-bootstrap"
import shuffle from "../assets/playerbuttons/shuffle.png"
import repeat from "../assets/playerbuttons/repeat.png"
import play from "../assets/playerbuttons/play.png"
import prev from "../assets/playerbuttons/prev.png"
import next from "../assets/playerbuttons/next.png"
import { useDispatch, useSelector } from "react-redux"
import { Heart } from "react-bootstrap-icons"
import { addFavouriteAction } from "../redux/action"

const PlayBar = () => {
  const player = useSelector((state) => state.player.selected)
  const dispatch = useDispatch()

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col className="offset-lg-2">
          <Row className="row h-100 align-items-center">
            <Col xs={4} className="d-flex text-white align-items-center">
              <div>
                <img
                  src={player?.album.cover_medium}
                  alt=""
                  style={{ width: "70px", height: "70px" }}
                />
              </div>
              <div className="ms-2">
                <p style={{ lineHeight: "1em" }}>{player?.artist.name}</p>
                <p style={{ lineHeight: "1em" }}>{player?.title_short}</p>
              </div>
              <Heart
                className="text-white ms-4"
                onClick={() => dispatch(addFavouriteAction(player?.title))}
              />
            </Col>
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <a href="/">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="/">
                  <img src={prev} alt="prev" />
                </a>
                <a href="/">
                  <img src={play} alt="play" />
                </a>
                <a href="/">
                  <img src={next} alt="next" />
                </a>
                <a href="/">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default PlayBar
