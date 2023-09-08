function AlertButton({ message, children }) {
  function handleClick(message) {
    return alert(message), alert(message + "!");
  }
  return (
    <button
      onClick={function () {
        return handleClick(message);
      }}>
      {children}
    </button>
  );
}
function Button({ onSamsh, children }) {
  return <button onClick={onSamsh}> {children} </button>;
}
function UploadButton() {
  return <Button onSamsh={() => alert("Uploading")}> Upload Imagins</Button>;
}
function PlayButton({ movieName }) {
  function handleClick() {
    return alert("Play " + movieName);
  }
  return <Button onSamsh={handleClick}>Play {movieName}</Button>;
}

function MuliOrNonli() {
  return (
    <>
      <Button onSamsh={() => alert("Playing")}>
        <b>Play Movie</b>
      </Button>
      <Button onSamsh={() => alert("Uploading")}>
        <i>Play Uploading</i>
      </Button>
    </>
  );
}

export function Toolbar() {
  return (
    <>
      <div
        style={{ width: "200px", height: "200px" }}
        className="toolbar"
        onSamsh={() => alert("toobar")}>
        <MuliOrNonli>muliOrNonliButton</MuliOrNonli>
        <UploadButton>UploadButton</UploadButton>
        <PlayButton movieName="용주의 코딩생활">PlayButton</PlayButton>
        <AlertButton message="Upload Movie">Upload Movie</AlertButton>
        <Button
          onSamsh={(event) => {
            event.stopPropagation();
            alert(event.target.innerText);
          }}>
          generalButton1
        </Button>
      </div>
      <Button onSamsh={() => alert("generalButtonAlert2")}>
        generalButton2
      </Button>
    </>
  );
}
