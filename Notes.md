# To fix Memory Capacity with Remote Powershell Command
- run the following on the destination machine in Powershell as Admin  
```
   Set-Item WSMan:\localhost\Shell\MaxMemoryPerShellMB 5000
   Set-Item WSMan:\localhost\Plugin\Microsoft.PowerShell\Quotas\MaxMemoryPerShellMB 5000
   Restart-Service winrm
```
#  Set up Devops pipeline


#### Powershell Command

- install yarn and node on destination machine
- run the following on the destination machine in Powershell as Admin  
```
   Set-Item WSMan:\localhost\Shell\MaxMemoryPerShellMB 5000
   Set-Item WSMan:\localhost\Plugin\Microsoft.PowerShell\Quotas\MaxMemoryPerShellMB 5000
   Restart-Service winrm
```
- Create a .ps1 file within the public folder of the site on the destination machine. call it yarn or something. the script is 
```
cd *path to public folder*;
   yarn install;
   yarn run webpack --mode=production;
``` 
- reference this file on the 'run powershell on target machines' task in the script file path


#  Pass a parameter to a partial

- Add the parameter into the call using the syntax below:

```
   @Html.Partial("path/to/_partial", new ViewDataDictionary{{"variableName", value}})
```

- Refer to the variable in the partial like so:
```
   <h2>@ViewData["variableName"]</h2>
```