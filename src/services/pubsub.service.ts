import { PubSub } from "@google-cloud/pubsub";

export const publishContactCreated = async (contact: any) => {
  const pubsub = new PubSub();
  const topicName = "contact-created";

  const messageBuffer = Buffer.from(JSON.stringify(contact));
  const messageId = await pubsub.topic(topicName).publishMessage({
    data: messageBuffer,
  });

  console.log("Published message>>> ", messageId);
};
