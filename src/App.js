import React from "react";
import "./style/HuddleProject.css";
import HuddleHeader from "./HuddleHeader";
import BuildCommunity from "./BuildCommunity";
import CommunityFormed from "./CommunityFormed";
import comm from "./Huddle_Images/icon-communities.svg";
import mesg from "./Huddle_Images/icon-messages.svg";
import ImageText from "./ImageText";
import growPics from "./Huddle_Images/illustration-grow-together.svg";
import conversationPics from "./Huddle_Images/illustration-flowing-conversation.svg";
import userPics from "./Huddle_Images/illustration-your-users.svg";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <HuddleHeader />
      <BuildCommunity
        head={"Build The Community Your Fans Will Love"}
        type={"top"}
      />
      <div className="community">
        <CommunityFormed
          icon={comm}
          lgText={"1.4k+"}
          smText={"Communities Formed"}
        />
        <CommunityFormed
          icon={mesg}
          lgText={"2.7m+"}
          smText={"Messages Sent"}
        />
      </div>
      <ImageText
        head={"Grow Together"}
        text={
          "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
        }
        image={growPics}
        type={"first"}
      />
      <ImageText
        head={"Flowing Conversations"}
        text={
          "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
        }
        image={conversationPics}
        type={"middle"}
      />
      <ImageText
        head={"Your Users"}
        text={
          "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
        }
        image={userPics}
        type={"third"}
      />
      <BuildCommunity
        style={{ margin: "20vh 0" }}
        head={"Ready To Build Your Community?"}
      />
      <Footer />
    </div>
  );
};

export default App;
