# 🌍 Hosting

## Infrastructure

The Cocoom solution is built above both the [Gandi IaaS services](https://www.gandi.net/en/cloud) and the [Microsoft Azure platform](https://azure.microsoft.com/en-us/).

::: tip MIGRATION
We are currently migrating everything left from Gandi infrastructure to Azure infrastructure.

**Migration will be fully completed in september 2020.**
:::

Here is an high level architecture view of Cocoom

![High level architecture](/img/infra/infra_high-level.png)

- Gandi contractual uptime: 99.95% ([IaaS article 5](https://contract.gandi.net/v5/contracts/42627/IaaS_SAS_2020.1_fr.pdf))
- Azure contractual uptime: 99.95% and more [VM SLA](https://azure.microsoft.com/en-us/support/legal/sla/virtual-machines/v1_9/)


## Data

Cocoom data are all stored in Datacenters located in France.

### Backup

2 daily backups are done & securely stored for all our customers' data.

We keep the lastest 48 hours of backups.

::: tip MIGRATION
In september, we'll have 15 days of backup data retention in Azure.
:::
