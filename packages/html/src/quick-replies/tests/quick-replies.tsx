

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div className="k-widget k-chat">
                    <div className="k-message-list">
                        <div className="k-message-list-content">
                            <div className="k-meta">Quick Replies</div>
                            <div className="k-quick-replies">
                                <span className="k-quick-reply">Quick</span>
                                <span className="k-quick-reply">Reply</span>
                                <span className="k-quick-reply">Another quick</span>
                                <span className="k-quick-reply">Reply with different length</span>
                                <span className="k-quick-reply">And onther quick reply to cause scroll</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section dir="rtl">
                <div className="k-widget k-chat">
                    <div className="k-message-list">
                        <div className="k-message-list-content">
                            <div className="k-meta">Quick Replies</div>
                            <div className="k-quick-replies">
                                <span className="k-quick-reply">Quick</span>
                                <span className="k-quick-reply">Reply</span>
                                <span className="k-quick-reply">Another quick</span>
                                <span className="k-quick-reply">Reply with different length</span>
                                <span className="k-quick-reply">And onther quick reply to cause scroll</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
