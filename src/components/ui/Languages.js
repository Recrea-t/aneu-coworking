import React from "react"
import { Link as GatsbyLink, navigate } from "gatsby"

//import browserLang from "browser-lang"
import locales from "../../../data/i18n"
import { useLocale } from "../../hooks/locale"
import useLanguageMapping from "../useLanguageMapping"

import { HStack, Link, StackDivider } from "@chakra-ui/react"

const Languages = props => {
  // Grab the locale (passed through context) from the Locale Provider
  // through useLocale() hoo
  const { locale } = useLocale()
  const languageMapping = useLanguageMapping()

  const defaultLang = "ca"
  const languages = Object.keys(locales)

  function handleClickLanguage(lang, options = { replace: true }) {
    if (locale === lang) return

    localStorage.setItem("gatsby-language", lang)

    const url = window.location.pathname.split("/").pop()

    if (!url)
      return locales[lang].default
        ? navigate(`/`, options)
        : navigate(`/${lang}`, options)

    const associatedUrls = languageMapping.find(item => {
      let hasUrl = false

      Object.entries(item).forEach(([key, value]) => {
        if (value.link.split("/").pop() === url) return (hasUrl = true)
      })

      return hasUrl
    })

    if (!associatedUrls)
      return locales[lang].default
        ? navigate(`/`, options)
        : navigate(`/${lang}`, options)

    return locales[lang].default
      ? navigate(`${associatedUrls[lang].link}`, options)
      : navigate(`/${lang}${associatedUrls[lang].link}`, options)
  }

  if (typeof window !== "undefined") {
    let detected = window.localStorage.getItem("gatsby-language") || "ca"
    //browserLang({
    //languages,
    //fallback: defaultLang,
    //})

    if (!languages.includes(detected)) {
      detected = defaultLang
    }

    if (locale !== detected) {
      handleClickLanguage(detected, { replace: true })
    }
  }

  return (
    <HStack
      display={props.display || "inherit"}
      spacing={1}
      divider={<StackDivider borderColor="nightRider.500" />}
    >
      <Link
        to="/"
        title="Català"
        as={GatsbyLink}
        variant="nav-link"
        onClick={e => {
          e.preventDefault()
          handleClickLanguage("ca")
        }}
        className={locale === "ca" ? "is-active" : ""}
      >
        CAT
      </Link>
      <Link
        to="/"
        title="Español"
        as={GatsbyLink}
        variant="nav-link"
        onClick={e => {
          e.preventDefault()
          handleClickLanguage("es")
        }}
        className={locale === "es" ? "is-active" : ""}
      >
        ES
      </Link>
      <Link
        to="/"
        title="English"
        as={GatsbyLink}
        variant="nav-link"
        onClick={e => {
          e.preventDefault()
          handleClickLanguage("en")
        }}
        className={locale === "en" ? "is-active" : ""}
      >
        ENG
      </Link>
    </HStack>
  )
}

export default Languages
