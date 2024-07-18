import toast, { Toaster } from "react-hot-toast";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === "") {
      toast.error("Whoops... Please enter topic in input");
      return;
    }
    onSearch(topic);
    form.reset();
  };

  return (
    <div>
      <header>
        <div>
          <Toaster />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="topic"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};
