import React from "react";
import type { EGift } from "../../../data/carousel";

interface NewCardProps {
  item: EGift;
}

const NewCard: React.FC<NewCardProps> = ({ item }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      backgroundColor: '#d4e9e2',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }}>
      <h2 style={{ margin: 0 }}>{item.displayName}</h2>
      <p style={{
        display: '-webkit-box',
        fontSize: '14px',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        marginBottom: '0',
      }}>{item.altText}</p>
      <span style={{ fontWeight: 400 }}>Product Number: {item.productNumber}</span>
    </div>
  );
};

export default NewCard;
