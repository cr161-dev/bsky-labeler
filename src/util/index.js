import { LabelerServer } from "@skyware/labeler";

const server = new LabelerServer({
    did: process.env.LABELER_DID,
    signingKey: process.env.SIGNING_KEY
});

server.start(14831, (error) => {
    if (error) {
        console.error("Failed to start server:", error);
    } else {
        console.log("Labeler server running on port 14831");
    }
});
