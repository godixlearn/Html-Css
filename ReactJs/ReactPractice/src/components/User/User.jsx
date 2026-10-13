function User(props) {
  const { image, firstName, lastName, email, phone } = props.users;

  return (
    <div>
      <img src={image} alt={firstName} />
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

export default User;
