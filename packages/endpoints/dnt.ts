import {build,emptyDir} from "https://deno.land/x/dnt/mod.ts"

await emptyDir('./npm')
await build({
    entryPoints:['./mod.ts'],
    outDir:"./npm",
    shims:{
        deno:true
    },
    package:{
        name:"discord-api-endpoints",
        version:Deno.args[0],
        description:"A package consisting of all discord api endpoints which can be used by bots.",
        license:"MIT",
        repository:{
            type:"git",
            url:"https://github.com/DenoCord-labs/utilities.git",
        },
        bugs:{
            url:"https://github.com/DenoCord-labs/utilities/issues",
        }
    }
})
Deno.copyFileSync("LICENSE","npm/LICENSE")
Deno.copyFileSync("README.md","npm/README.md")