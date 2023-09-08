import getImageUrl from "./Utils";

function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

function Avatar({ size, person }) {
  return (
    <img
      className="photo"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return <div className="photo">{children}</div>;
}
export default Profile;
