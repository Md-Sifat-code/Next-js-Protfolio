<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <!-- Match the root of the sitemap -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap - MdSifat</title>
      </head>
      <body>
        <h1>Sitemap for MdSifat.site</h1>
        <table border="1">
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <!-- Loop through all <url> elements -->
          <xsl:for-each select="//url">
            <tr>
              <!-- Extract URL -->
              <td><xsl:value-of select="loc" /></td>
              <!-- Extract Last Modified Date -->
              <td><xsl:value-of select="lastmod" /></td>
              <!-- Extract Change Frequency -->
              <td><xsl:value-of select="changefreq" /></td>
              <!-- Extract Priority -->
              <td><xsl:value-of select="priority" /></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
