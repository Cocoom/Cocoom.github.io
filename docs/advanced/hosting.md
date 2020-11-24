# 🌍 Hosting

## Infrastructure

The Cocoom solution is built above the [Microsoft Azure platform](https://azure.microsoft.com/en-us/).


Here is an high level architecture view of Cocoom

![High level architecture](/img/infra/infra_high-level.png)

- Azure contractual uptime: 99.95% and more [VM SLA](https://azure.microsoft.com/en-us/support/legal/sla/virtual-machines/v1_9/)


## Data

Cocoom data are all stored in Datacenters located in France (France central).

### Backup

- Backups are done every 15 minutes & we keep them during 7 days,

- We also keep 7 more days of backups done every hour,

- Backups are stored in another secured storage (redundent & encrypted).
