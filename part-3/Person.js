function Person({name, age, hobbies}) {
  return (
    <div>
      <p>{name.length > 8 ? name.substring(0,6) : name}</p>
      <p>{age}</p>
      <h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>
      <ul>
        {hobbies.map(hobby => <li>{hobby}</li>)}
      </ul>
    </div>

  );
}