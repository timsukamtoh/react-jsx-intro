function Tweet({username, name, date, message}) {
  return (
    <div>
      <p>{username} ({name}):</p>
      <p>{message}</p>
      <p>{date.toString()}</p>
    </div>

  );
}