# Shared

Types:

- <code><a href="./src/resources/shared.ts">Bid</a></code>
- <code><a href="./src/resources/shared.ts">Budget</a></code>
- <code><a href="./src/resources/shared.ts">Session</a></code>
- <code><a href="./src/resources/shared.ts">SessionList</a></code>

# Blockchain

Types:

- <code><a href="./src/resources/blockchain/blockchain.ts">Balance</a></code>

Methods:

- <code title="post /blockchain/approve">client.blockchain.<a href="./src/resources/blockchain/blockchain.ts">approve</a>({ ...params }) -> void</code>
- <code title="post /blockchain/send/eth">client.blockchain.<a href="./src/resources/blockchain/blockchain.ts">ethSend</a>({ ...params }) -> Balance</code>
- <code title="post /blockchain/send/mor">client.blockchain.<a href="./src/resources/blockchain/blockchain.ts">morSend</a>({ ...params }) -> Balance</code>

## Models

Types:

- <code><a href="./src/resources/blockchain/models/models.ts">Model</a></code>
- <code><a href="./src/resources/blockchain/models/models.ts">ModelListResponse</a></code>

Methods:

- <code title="post /blockchain/models">client.blockchain.models.<a href="./src/resources/blockchain/models/models.ts">create</a>({ ...params }) -> Model</code>
- <code title="get /blockchain/models">client.blockchain.models.<a href="./src/resources/blockchain/models/models.ts">list</a>() -> ModelListResponse</code>
- <code title="delete /blockchain/models/{id}">client.blockchain.models.<a href="./src/resources/blockchain/models/models.ts">delete</a>(id) -> void</code>
- <code title="post /blockchain/models/{id}/session">client.blockchain.models.<a href="./src/resources/blockchain/models/models.ts">session</a>(id, { ...params }) -> Session</code>

### Bids

Types:

- <code><a href="./src/resources/blockchain/models/bids.ts">BidListResponse</a></code>
- <code><a href="./src/resources/blockchain/models/bids.ts">BidActiveResponse</a></code>
- <code><a href="./src/resources/blockchain/models/bids.ts">BidRatedResponse</a></code>

Methods:

- <code title="get /blockchain/models/{id}/bids">client.blockchain.models.bids.<a href="./src/resources/blockchain/models/bids.ts">list</a>(id, { ...params }) -> BidListResponse</code>
- <code title="get /blockchain/models/{id}/bids/active">client.blockchain.models.bids.<a href="./src/resources/blockchain/models/bids.ts">active</a>(id) -> BidActiveResponse</code>
- <code title="get /blockchain/models/{id}/bids/rated">client.blockchain.models.bids.<a href="./src/resources/blockchain/models/bids.ts">rated</a>(id) -> BidRatedResponse</code>

### Stats

Types:

- <code><a href="./src/resources/blockchain/models/stats.ts">ModelStats</a></code>

Methods:

- <code title="get /blockchain/models/{id}/stats">client.blockchain.models.stats.<a href="./src/resources/blockchain/models/stats.ts">list</a>(id) -> ModelStats</code>

## Providers

Types:

- <code><a href="./src/resources/blockchain/providers/providers.ts">Provider</a></code>
- <code><a href="./src/resources/blockchain/providers/providers.ts">ProviderListResponse</a></code>

Methods:

- <code title="post /blockchain/providers">client.blockchain.providers.<a href="./src/resources/blockchain/providers/providers.ts">create</a>({ ...params }) -> Provider</code>
- <code title="get /blockchain/providers">client.blockchain.providers.<a href="./src/resources/blockchain/providers/providers.ts">list</a>() -> ProviderListResponse</code>
- <code title="delete /blockchain/providers/{id}">client.blockchain.providers.<a href="./src/resources/blockchain/providers/providers.ts">delete</a>(id) -> void</code>

### Bids

Types:

- <code><a href="./src/resources/blockchain/providers/bids/bids.ts">BidListResponse</a></code>

Methods:

- <code title="get /blockchain/providers/{id}/bids">client.blockchain.providers.bids.<a href="./src/resources/blockchain/providers/bids/bids.ts">list</a>(id, { ...params }) -> BidListResponse</code>

#### Active

Types:

- <code><a href="./src/resources/blockchain/providers/bids/active.ts">ActiveListResponse</a></code>

Methods:

- <code title="get /blockchain/providers/{id}/bids/active">client.blockchain.providers.bids.active.<a href="./src/resources/blockchain/providers/bids/active.ts">list</a>(id) -> ActiveListResponse</code>

## Balance

Methods:

- <code title="get /blockchain/balance">client.blockchain.balance.<a href="./src/resources/blockchain/balance.ts">retrieve</a>() -> Balance</code>

## Allowance

Types:

- <code><a href="./src/resources/blockchain/allowance.ts">AllowanceRetrieveResponse</a></code>

Methods:

- <code title="get /blockchain/allowance">client.blockchain.allowance.<a href="./src/resources/blockchain/allowance.ts">retrieve</a>({ ...params }) -> AllowanceRetrieveResponse</code>

## LatestBlock

Types:

- <code><a href="./src/resources/blockchain/latest-block.ts">LatestBlock</a></code>

Methods:

- <code title="get /blockchain/latestBlock">client.blockchain.latestBlock.<a href="./src/resources/blockchain/latest-block.ts">retrieve</a>() -> LatestBlock</code>

## Token

### Supply

Types:

- <code><a href="./src/resources/blockchain/token/supply.ts">TokenSupply</a></code>

Methods:

- <code title="get /blockchain/token/supply">client.blockchain.token.supply.<a href="./src/resources/blockchain/token/supply.ts">retrieve</a>() -> TokenSupply</code>

## Transactions

Types:

- <code><a href="./src/resources/blockchain/transactions.ts">TransactionList</a></code>

Methods:

- <code title="get /blockchain/transactions">client.blockchain.transactions.<a href="./src/resources/blockchain/transactions.ts">list</a>() -> TransactionList</code>

## Bids

## Sessions

# BlockchainBids

Methods:

- <code title="post /blockchain/bids">client.blockchainBids.<a href="./src/resources/blockchain-bids.ts">create</a>({ ...params }) -> Bid</code>
- <code title="get /blockchain/bids/{id}">client.blockchainBids.<a href="./src/resources/blockchain-bids.ts">retrieve</a>(id) -> Bid</code>
- <code title="delete /blockchain/bids/{id}">client.blockchainBids.<a href="./src/resources/blockchain-bids.ts">delete</a>(id) -> void</code>
- <code title="post /blockchain/bids/{id}/session">client.blockchainBids.<a href="./src/resources/blockchain-bids.ts">session</a>(id, { ...params }) -> Session</code>

# BlockchainSessions

Methods:

- <code title="post /blockchain/sessions">client.blockchainSessions.<a href="./src/resources/blockchain-sessions.ts">create</a>({ ...params }) -> Session</code>
- <code title="get /blockchain/sessions/{id}">client.blockchainSessions.<a href="./src/resources/blockchain-sessions.ts">retrieve</a>(id) -> Session</code>
- <code title="get /blockchain/sessions/budget">client.blockchainSessions.<a href="./src/resources/blockchain-sessions.ts">budget</a>() -> Budget</code>
- <code title="post /blockchain/sessions/{id}/close">client.blockchainSessions.<a href="./src/resources/blockchain-sessions.ts">close</a>(id) -> void</code>
- <code title="get /blockchain/sessions/provider">client.blockchainSessions.<a href="./src/resources/blockchain-sessions.ts">provider</a>({ ...params }) -> SessionList</code>
- <code title="get /blockchain/sessions/user">client.blockchainSessions.<a href="./src/resources/blockchain-sessions.ts">user</a>({ ...params }) -> SessionList</code>

# Proxy

## Sessions

Types:

- <code><a href="./src/resources/proxy/sessions.ts">ClaimableBalance</a></code>

Methods:

- <code title="post /proxy/sessions/initiate">client.proxy.sessions.<a href="./src/resources/proxy/sessions.ts">initiate</a>({ ...params }) -> Session</code>
- <code title="post /proxy/sessions/{id}/providerClaim">client.proxy.sessions.<a href="./src/resources/proxy/sessions.ts">providerClaim</a>(id, { ...params }) -> ClaimableBalance</code>
- <code title="get /proxy/sessions/{id}/providerClaimableBalance">client.proxy.sessions.<a href="./src/resources/proxy/sessions.ts">providerClaimableBalance</a>(id) -> ClaimableBalance</code>
