# Shared

Types:

- <code><a href="./src/resources/shared.ts">Bid</a></code>
- <code><a href="./src/resources/shared.ts">Session</a></code>

# Blockchain

## Models

Types:

- <code><a href="./src/resources/blockchain/models/models.ts">Model</a></code>
- <code><a href="./src/resources/blockchain/models/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/blockchain/models/models.ts">ModelDeleteResponse</a></code>
- <code><a href="./src/resources/blockchain/models/models.ts">ModelExistsResponse</a></code>
- <code><a href="./src/resources/blockchain/models/models.ts">ModelResetstatsResponse</a></code>

Methods:

- <code title="post /blockchain/models">client.blockchain.models.<a href="./src/resources/blockchain/models/models.ts">create</a>({ ...params }) -> Model</code>
- <code title="get /blockchain/models">client.blockchain.models.<a href="./src/resources/blockchain/models/models.ts">list</a>() -> ModelListResponse</code>
- <code title="delete /blockchain/models/{id}">client.blockchain.models.<a href="./src/resources/blockchain/models/models.ts">delete</a>(id) -> ModelDeleteResponse</code>
- <code title="get /blockchain/models/{id}/exists">client.blockchain.models.<a href="./src/resources/blockchain/models/models.ts">exists</a>(id) -> ModelExistsResponse</code>
- <code title="post /blockchain/models/{id}/resetstats">client.blockchain.models.<a href="./src/resources/blockchain/models/models.ts">resetstats</a>(id) -> ModelResetstatsResponse</code>
- <code title="post /blockchain/models/{id}/session">client.blockchain.models.<a href="./src/resources/blockchain/models/models.ts">session</a>(id, { ...params }) -> Session</code>

### Bids

Methods:

- <code title="get /blockchain/models/{id}/bids">client.blockchain.models.bids.<a href="./src/resources/blockchain/models/bids.ts">list</a>(id, { ...params }) -> Bid</code>
- <code title="get /blockchain/models/{id}/bids/active">client.blockchain.models.bids.<a href="./src/resources/blockchain/models/bids.ts">active</a>(id) -> Bid</code>
- <code title="get /blockchain/models/{id}/bids/rated">client.blockchain.models.bids.<a href="./src/resources/blockchain/models/bids.ts">rated</a>(id) -> Bid</code>

### Minstake

Types:

- <code><a href="./src/resources/blockchain/models/minstake.ts">MinStake</a></code>
- <code><a href="./src/resources/blockchain/models/minstake.ts">MinstakeSetResponse</a></code>

Methods:

- <code title="get /blockchain/models/minstake">client.blockchain.models.minstake.<a href="./src/resources/blockchain/models/minstake.ts">retrieve</a>() -> MinStake</code>
- <code title="post /blockchain/models/minstake">client.blockchain.models.minstake.<a href="./src/resources/blockchain/models/minstake.ts">set</a>({ ...params }) -> MinstakeSetResponse</code>

### Stats

Types:

- <code><a href="./src/resources/blockchain/models/stats.ts">ModelStats</a></code>

Methods:

- <code title="get /blockchain/models/{id}/stats">client.blockchain.models.stats.<a href="./src/resources/blockchain/models/stats.ts">retrieve</a>(id) -> ModelStats</code>

## Bids

Types:

- <code><a href="./src/resources/blockchain/bids.ts">BidCreateResponse</a></code>
- <code><a href="./src/resources/blockchain/bids.ts">BidRetrieveResponse</a></code>
- <code><a href="./src/resources/blockchain/bids.ts">BidDeleteResponse</a></code>

Methods:

- <code title="post /blockchain/bids">client.blockchain.bids.<a href="./src/resources/blockchain/bids.ts">create</a>({ ...params }) -> BidCreateResponse</code>
- <code title="get /blockchain/bids/{id}">client.blockchain.bids.<a href="./src/resources/blockchain/bids.ts">retrieve</a>(id) -> BidRetrieveResponse</code>
- <code title="delete /blockchain/bids/{id}">client.blockchain.bids.<a href="./src/resources/blockchain/bids.ts">delete</a>(id) -> BidDeleteResponse</code>
- <code title="post /blockchain/bids/{id}/session">client.blockchain.bids.<a href="./src/resources/blockchain/bids.ts">session</a>(id, { ...params }) -> Session</code>

## Sessions

Types:

- <code><a href="./src/resources/blockchain/sessions/sessions.ts">SessionRetrieveResponse</a></code>
- <code><a href="./src/resources/blockchain/sessions/sessions.ts">SessionCloseResponse</a></code>

Methods:

- <code title="post /blockchain/sessions">client.blockchain.sessions.<a href="./src/resources/blockchain/sessions/sessions.ts">create</a>({ ...params }) -> Session</code>
- <code title="get /blockchain/sessions/{id}">client.blockchain.sessions.<a href="./src/resources/blockchain/sessions/sessions.ts">retrieve</a>(id) -> SessionRetrieveResponse</code>
- <code title="post /blockchain/sessions/{id}/close">client.blockchain.sessions.<a href="./src/resources/blockchain/sessions/sessions.ts">close</a>(id) -> SessionCloseResponse</code>

### User

Types:

- <code><a href="./src/resources/blockchain/sessions/user.ts">UserListResponse</a></code>

Methods:

- <code title="get /blockchain/sessions/user">client.blockchain.sessions.user.<a href="./src/resources/blockchain/sessions/user.ts">list</a>({ ...params }) -> UserListResponse</code>

### Provider

Types:

- <code><a href="./src/resources/blockchain/sessions/provider.ts">ProviderListResponse</a></code>

Methods:

- <code title="get /blockchain/sessions/provider">client.blockchain.sessions.provider.<a href="./src/resources/blockchain/sessions/provider.ts">list</a>({ ...params }) -> ProviderListResponse</code>

### Budget

Types:

- <code><a href="./src/resources/blockchain/sessions/budget.ts">BudgetListResponse</a></code>

Methods:

- <code title="get /blockchain/sessions/budget">client.blockchain.sessions.budget.<a href="./src/resources/blockchain/sessions/budget.ts">list</a>() -> BudgetListResponse</code>

## Providers

Types:

- <code><a href="./src/resources/blockchain/providers/providers.ts">Provider</a></code>
- <code><a href="./src/resources/blockchain/providers/providers.ts">ProviderListResponse</a></code>
- <code><a href="./src/resources/blockchain/providers/providers.ts">ProviderDeleteResponse</a></code>

Methods:

- <code title="post /blockchain/providers">client.blockchain.providers.<a href="./src/resources/blockchain/providers/providers.ts">create</a>({ ...params }) -> Provider</code>
- <code title="get /blockchain/providers">client.blockchain.providers.<a href="./src/resources/blockchain/providers/providers.ts">list</a>() -> ProviderListResponse</code>
- <code title="delete /blockchain/providers/{id}">client.blockchain.providers.<a href="./src/resources/blockchain/providers/providers.ts">delete</a>(id) -> ProviderDeleteResponse</code>

### Bids

Methods:

- <code title="get /blockchain/providers/{id}/bids">client.blockchain.providers.bids.<a href="./src/resources/blockchain/providers/bids/bids.ts">list</a>(id, { ...params }) -> Bid</code>

#### Active

Methods:

- <code title="get /blockchain/providers/{id}/bids/active">client.blockchain.providers.bids.active.<a href="./src/resources/blockchain/providers/bids/active.ts">list</a>(id) -> Bid</code>

## Balance

Types:

- <code><a href="./src/resources/blockchain/balance.ts">Balance</a></code>

Methods:

- <code title="get /blockchain/balance">client.blockchain.balance.<a href="./src/resources/blockchain/balance.ts">retrieve</a>() -> Balance</code>

## Allowance

Types:

- <code><a href="./src/resources/blockchain/allowance.ts">Allowance</a></code>
- <code><a href="./src/resources/blockchain/allowance.ts">AllowanceApproveResponse</a></code>

Methods:

- <code title="get /blockchain/allowance">client.blockchain.allowance.<a href="./src/resources/blockchain/allowance.ts">retrieve</a>({ ...params }) -> Allowance</code>
- <code title="post /blockchain/allowance">client.blockchain.allowance.<a href="./src/resources/blockchain/allowance.ts">approve</a>({ ...params }) -> AllowanceApproveResponse</code>

## Send

Types:

- <code><a href="./src/resources/blockchain/send.ts">SendEthResponse</a></code>
- <code><a href="./src/resources/blockchain/send.ts">SendMorResponse</a></code>

Methods:

- <code title="post /blockchain/send/eth">client.blockchain.send.<a href="./src/resources/blockchain/send.ts">eth</a>({ ...params }) -> SendEthResponse</code>
- <code title="post /blockchain/send/mor">client.blockchain.send.<a href="./src/resources/blockchain/send.ts">mor</a>({ ...params }) -> SendMorResponse</code>

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

- <code title="get /blockchain/transactions">client.blockchain.transactions.<a href="./src/resources/blockchain/transactions.ts">list</a>({ ...params }) -> TransactionList</code>

# Proxy

## Sessions

Types:

- <code><a href="./src/resources/proxy/sessions.ts">SessionProviderClaimResponse</a></code>
- <code><a href="./src/resources/proxy/sessions.ts">SessionProviderClaimableBalanceResponse</a></code>

Methods:

- <code title="post /proxy/sessions/initiate">client.proxy.sessions.<a href="./src/resources/proxy/sessions.ts">initiate</a>({ ...params }) -> Session</code>
- <code title="post /proxy/sessions/{id}/providerClaim">client.proxy.sessions.<a href="./src/resources/proxy/sessions.ts">providerClaim</a>(id, { ...params }) -> SessionProviderClaimResponse</code>
- <code title="get /proxy/sessions/{id}/providerClaimableBalance">client.proxy.sessions.<a href="./src/resources/proxy/sessions.ts">providerClaimableBalance</a>(id) -> SessionProviderClaimableBalanceResponse</code>
