Erläuterung:

-> => Event vom Client zum Server

<- => Event vom Server zum Client

"shopInventory": string shopJson => Eventname samt Parameter

Events:

-> "triggerInteraction"

(in ColShape)

<- "shopInventory": string shopJson


-> "previewProduct": int id, int variation

<- "responsePreviewProduct": bool success, string errormsg



-> "buyProduct": int id, int variation, string payment { "cash", "card" }

<- "responseBuyProduct": bool success, string errormsg





Dependencies:

- NetCore 3.1

- RageMP 0.3.7