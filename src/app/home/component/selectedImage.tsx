import {
  faCaretLeft,
  faCaretRight,
  faForwardFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SelectedImage(image: any) {
  return (
    <div>
      <div>
        <div>
          <button>
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <button></button>
          <button>
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
          <button></button>
        </div>
        <div>
          <button></button>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
