function Tweet({username, name, date, message}) {
  return (
    <div>
      <p className="text-red">{username} ({name}):</p>
      <p>{message}</p>
      <p>{date.toString()}</p>
    </div>

  );
}