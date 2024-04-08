import { useContext, useEffect, useState } from "react";
import CommentList from "./commenst list";
import AddComment from "./addComment";
import Loading from "../SPINNER/spinner";
import { SelectedContext } from "../CONTEXT/selectedContext";

const CommentArea = () => {
  const { selected } = useContext(SelectedContext);

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getFetchComments = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + selected,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYjE3ZDQwZjQxNzAwMTg5YTM4MTAiLCJpYXQiOjE3MDg0NDM2NDEsImV4cCI6MTcwOTY1MzI0MX0.QWLXlw7lRYxS40RHNaH8Uap8RVbEXh0jY3HfXqxedtA",
            },
          }
        );
        if (response.ok) {
          let comments = await response.json();
          console.log(comments);
          setIsLoading(false);
          setComments(comments);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    if (selected) {
      getFetchComments();
    }
  }, [selected]);
  return (
    <div className="text-center w-50">
      {isLoading && <Loading />}
      <AddComment asin={selected} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
