function decomposeUrl(url) {
    const result = {
        protocol: null,
        ipAddress: null,
        subDomain: null,
        domainName: null,
        folderTree: null,
        targetFile: null,
        argumentsFile: null
    };

            try {
            
                const parsedUrl = new URL(url);

                // Protocol
                result.protocol = parsedUrl.protocol.replace(':', '');

                // Domain and subdomain
                const hostnameParts = parsedUrl.hostname.split('.');
                if (hostnameParts.length > 2) {
                    result.subDomain = hostnameParts[0];
                    result.domainName = hostnameParts.slice(1).join('.');
                } else {
                    result.subDomain = null;
                    result.domainName = parsedUrl.hostname;
                }

                // Check for IP address (basic regex for IPv4)
                const ipRegex = /^(\\d{1,3}\.){3}\d{1,3}$/;
                if (ipRegex.test(parsedUrl.hostname)) {
                    result.ipAddress = parsedUrl.hostname;
                }

                // Folder tree
                const pathParts = parsedUrl.pathname.split('/').filter(part => part);
                if (pathParts.length > 1) {
                    result.folderTree = pathParts.slice(0, -1);
                } else {
                    result.folderTree = null;
                }

                // Target file
                const lastPart = pathParts[pathParts.length - 1] || null;
                if (lastPart && lastPart.includes('.')) {
                    result.targetFile = lastPart;
                } else {
                    result.targetFile = lastPart;
                }

                // Arguments file
                result.argumentsFile = parsedUrl.search || null;
            } 
            
                    catch (error) {
                        console.error('Invalid URL:', error);
                    }

                    return result;
}

                        const url = "https://www.realbetisbalompie.es/entradas/?utm_source=gads&utm_medium=paid_search&utm_campaign=bt_ticketing_always_on_adsmurai&utm_id=bt_00&utm_content=texto&https://www.realbetisbalompie.es/entradas?utm_source=gads&utm_medium=paid_search&utm_campaign=bt_ticketing_always_on_adsmurai&utm_id=bt_00&utm_content=texto&gad_source=1&gclid=CjwKCAiA6aW6BhBqEiwA6KzDc2jyU2GAfrCFhqmgXxpHBxYayfiOqYEUJCr7U_rMaoS2v5ur75adrRoCnacQAvD_BwE";

                        console.log(decomposeUrl(url));
