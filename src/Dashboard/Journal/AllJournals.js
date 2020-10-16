import JournalComponent from "./JournalComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import "./AllJournals.css";

import React from "react";

function AllJournals({
  journals,
  handleView,
  handleDelete,
  fetchData,
  hasMore,
}) {
  const renderJournals = () => {
    return journals.map((journal) => {
      return (
        <JournalComponent
          key={journal.id}
          journal={journal}
          handleView={handleView}
          handleDelete={handleDelete}
        />
      );
    });
  };

  return (
    <div className="all-journals" id="donat">
      <InfiniteScroll
        scrollableTarget="donat"
        className="all-journals"
        dataLength={journals.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        // loader={<h4>Loading...</h4>}
        useWindow={true}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {renderJournals()}
      </InfiniteScroll>
    </div>
  );
}

export default AllJournals;
