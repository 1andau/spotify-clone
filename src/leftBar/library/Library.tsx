import React from 'react';
import { LeftbarCollections, Title, LibraryItem } from '../styles';

export const Library: React.FC = () => {
  return (
    <LeftbarCollections >
      <Title>YOUR LIBRARY</Title>
      <LibraryItem > Top songs</LibraryItem>
      <LibraryItem>Liked Songs</LibraryItem>
      <LibraryItem>Albums</LibraryItem>
      <LibraryItem>Artists</LibraryItem>
      <LibraryItem>Podcasts</LibraryItem>
    </LeftbarCollections>
  );
};
