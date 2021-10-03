import React from "react";
import ItemCard from "./ItemCard";

export default class Workspace extends React.Component {
    render() {
        const { currentList,
                renameListItemCallback} = this.props;
        if (currentList != null){
            let itemArray = currentList.items;
            return (
                <div id="top5-workspace">
                    <div id="workspace-edit">
                        <div id="edit-numbering">
                            <div className="item-number">1.</div>
                            <div className="item-number">2.</div>
                            <div className="item-number">3.</div>
                            <div className="item-number">4.</div>
                            <div className="item-number">5.</div>
                        </div>
                        <div id="edit-items">
                            {<ItemCard
                                text={itemArray[0]}
                                id={1}
                                renameListItemCallback={renameListItemCallback}
                            />}
                            {<ItemCard
                                text={itemArray[1]}
                                id={2}
                                renameListItemCallback={renameListItemCallback}
                            />}
                            {<ItemCard
                                text={itemArray[2]}
                                id={3}
                                renameListItemCallback={renameListItemCallback}
                            />}
                            {<ItemCard
                                text={itemArray[3]}
                                id={4}
                                renameListItemCallback={renameListItemCallback}
                            />}
                            {<ItemCard
                                text={itemArray[4]}
                                id={5}
                                renameListItemCallback={renameListItemCallback}
                            />}
                            {/* <div id='item-1' class="top5-item">{itemArray[0]}</div>
                            <div id='item-2' class="top5-item">{itemArray[1]}</div>
                            <div id='item-3' class="top5-item">{itemArray[2]}</div>
                            <div id='item-4' class="top5-item">{itemArray[3]}</div>
                            <div id='item-5' class="top5-item">{itemArray[4]}</div> */}
                    </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="top5-workspace">
                    <div id="workspace-edit">
                        <div id="edit-numbering">
                            <div className="item-number">1.</div>
                            <div className="item-number">2.</div>
                            <div className="item-number">3.</div>
                            <div className="item-number">4.</div>
                            <div className="item-number">5.</div>
                        </div>
                    </div>
                </div>
            )
        }
        

        
    }
}