"use client";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo-client";
type Props = {
  children: React.ReactNode;
};

export default function Provider({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
