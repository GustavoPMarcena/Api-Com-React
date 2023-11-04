import { PostCard } from "../PostCard"
import "./styles.css"

export const Posts = ({posts}) => (
   
        <div className="posts">
        {posts.map((element) => (
          <PostCard key={element.id}
            id={element.id}
            cover={element.cover}
            title={element.title}
            body={element.body}

          />
        ))}
      </div>
    
)